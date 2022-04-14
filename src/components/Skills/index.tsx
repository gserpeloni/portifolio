import SkillCard from '../SkillCard';
import { SkillGrid } from './styles'
import { skillsData } from './skills'

const Skills: React.FC = (props) => {
    const listOfSkills = skillsData.map((item) => {
        return (
            <SkillCard
                imgSrc={item?.imgSrc}
                skillName={item?.skillName}
            />
        );
    })

    return (
        <SkillGrid>
            <div className="titleDiv">SKILLS</div>
            <ul>
                {listOfSkills}
            </ul>
        </SkillGrid>
    );
};

export default Skills;
