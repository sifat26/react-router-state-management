import { LineChart, Line,CartesianGrid, XAxis, YAxis } from 'recharts';
const Linechart = () => {
   const  students= [
        {
          "student_id": 1,
          "math_marks": 85,
          "physics_marks": 78,
          "chemistry_marks": 92
        },
        {
          "student_id": 2,
          "math_marks": 70,
          "physics_marks": 82,
          "chemistry_marks": 88
        },
        {
          "student_id": 3,
          "math_marks": 92,
          "physics_marks": 65,
          "chemistry_marks": 75
        },
        {
          "student_id": 4,
          "math_marks": 78,
          "physics_marks": 90,
          "chemistry_marks": 82
        },
        {
          "student_id": 5,
          "math_marks": 80,
          "physics_marks": 75,
          "chemistry_marks": 85
        },
        {
          "student_id": 6,
          "math_marks": 88,
          "physics_marks": 72,
          "chemistry_marks": 78
        },
        {
          "student_id": 7,
          "math_marks": 75,
          "physics_marks": 85,
          "chemistry_marks": 90
        },
        {
          "student_id": 8,
          "math_marks": 82,
          "physics_marks": 78,
          "chemistry_marks": 84
        },
        {
          "student_id": 9,
          "math_marks": 72,
          "physics_marks": 92,
          "chemistry_marks": 79
        },
        {
          "student_id": 10,
          "math_marks": 90,
          "physics_marks": 84,
          "chemistry_marks": 88
        }
      ]
    return (
        <div>
            <LineChart width={400} height={500} data={students}>
                <Line type="monotone" dataKey={'math_marks'}stroke="#8884d8"></Line>
                <Line type="monotone" dataKey={'physics_marks' }stroke="#8884d8"></Line>
                <Line type="monotone" dataKey={'chemistry_marks'} stroke="#8884d8"></Line>
                <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
            </LineChart>
            
        </div>
    );
};

export default Linechart;