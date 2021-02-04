import React, {useState} from "react";
import Affairs from "./Affairs";


export type AffairPriorityType = "high" | 'middle' | 'low'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
};
export type FilterType = "all" | AffairPriorityType;

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === "high") {
        return affairs.filter(a => a.priority === "high")
    } else if (filter === 'middle') {
        return affairs.filter(a => a.priority === 'middle')
    } else if (filter === 'low') {
        return affairs.filter(a => a.priority === 'low')
    } else if (filter === "all") {
        return affairs
    } else return affairs
}


export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> =>affairs.filter(a => a._id !== _id)


function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

    return (
        <div>
            <Affairs
                affairs={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    );
}

export default HW2;
