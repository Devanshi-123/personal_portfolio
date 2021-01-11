import React from 'react';
import '../../App.css';
import { SkillBar } from 'react-skills';

const Skills = props =>{
    return(
        <div class="desc full">
    <SkillBar name="HTML5" level={80} color="#8ac6d1" /><br/>
    <SkillBar name="CSS" level={60} color="#bbded6" /><br/>
    <SkillBar name="ReactJS" level={70} color="#ffb6b9" /><br/>
    <SkillBar name="NodeJS" level={50} color="#fae3d9" /><br/>
    <SkillBar name="MongoDB" level={50} color="#2c3e50" /><br/>
    <SkillBar name="Python" level={70} color="#b0a160" /><br/>
    <SkillBar name="Machine Learning" level={60} color=" #ecce6d" /><br/>
    <SkillBar name="Data Structure" level={70} color="#ed6663" /><br/>
    <SkillBar name="Algorithms" level={50} color="#ffa372" /><br/>
    </div>
    );
}

export default Skills;