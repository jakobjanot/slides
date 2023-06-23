<?xml version="1.0" encoding="UTF-8"?>
<sch:schema 
    xmlns:sch="http://purl.oclc.org/dsdl/schematron"
    xmlns:sqf="http://www.schematron-quickfix.com/validator/process"
    queryBinding="xslt2">
    
    <sch:pattern>
        <sch:rule context="paragraf[preceding::paragraf]">
            <sch:let name="paragraf-number" value="number(substring-after(@id, 'p'))"/>
            <sch:let name="preceding-paragraf-id" value="preceding::paragraf[1]/@id"/>
            <sch:let name="preceding-paragraf-number" value="number(substring-after($preceding-paragraf-id, 'p'))"/>
            
            <sch:assert test="$paragraf-number gt $preceding-paragraf-number ">
                The paragraf id (<sch:value-of select="@id"/>) should be larger than the id 
                of the preceding paragraf (<sch:value-of select="$preceding-paragraf-id"/>)  
            </sch:assert>
        </sch:rule>
        
        <sch:rule context="paragraf/@id">
            <sch:assert test="matches(., '^p[1-9][0-9]*([a-zæøå][aoe]?)?$')">
                The paragraf id (<sch:value-of select="."/> should start with p,
                a number, and perhaps a single letter.
            </sch:assert>
            
            <sch:report test="ends-with(., 'ae')" sqf:fix="replace-ae">
                id should not contain 'ae'
            </sch:report>
            
            <sqf:fix id="replace-ae">
                <sqf:description>
                    <sqf:title>Replace 'ae' with 'æ'</sqf:title>
                </sqf:description>
                <sqf:replace node-type="keep" target="id" select="replace(., 'ae', 'æ')"/>
            </sqf:fix>
        </sch:rule>
        
        <sch:rule context="paragraf">
            <sch:assert test="starts-with(descendant::text()[1], '§')" sqf:fix="remove-pgf-start">
                Paragraf is not supposed to start with a '§'
            </sch:assert>
            <sqf:fix id="remove-pgf-start">
                <sqf:description>
                    <sqf:title>Remove § from startt</sqf:title>
                </sqf:description>
                <sqf:stringReplace regex="^§\s*[1-9][0-9]*\s*[A-ZÆØÅa-zæøå]?\.?\s+" select="''"/>
            </sqf:fix>
        </sch:rule>
    </sch:pattern>
</sch:schema>