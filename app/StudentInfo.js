import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h2>Kyler Axten</h2>
      <p>Course Section: CPRG 306 F</p>
      <Link href="https://github.com/kykyler">
        <a>GitHub Repository</a>
      </Link>
    </div>
  );
};

export default StudentInfo;
