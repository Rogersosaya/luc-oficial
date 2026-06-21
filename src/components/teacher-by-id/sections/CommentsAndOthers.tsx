import Container from "@/components/container/Container";
import Others from "../components/Others";
import CommentsContainer from "../components/CommentsContainer";
import { getCommentsByTeacher } from "@/actions/comment/get-comments-by-teacher";
import { getTeachersRecent } from "@/actions/teacher/get-teachers-recent";

interface TeacherProp {
  id: string;
  name: string;
  slug: string;
}

async function CommentsAndOthers({ teacher }: { teacher: TeacherProp }) {
  const [comments, recent] = await Promise.all([
    getCommentsByTeacher({ teacher: teacher.id }),
    getTeachersRecent(8),
  ]);

  const others = recent.filter((t) => t.slug !== teacher.slug).slice(0, 3);

  return (
    <Container className="py-16">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CommentsContainer comments={comments} teacher={teacher} />
        </div>
        <aside className="lg:col-span-1">
          <Others teachers={others} />
        </aside>
      </div>
    </Container>
  );
}

export default CommentsAndOthers;
