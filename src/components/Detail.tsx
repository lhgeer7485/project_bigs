import useDetail from "../hooks/useDetail.tsx";
import Button from "./button/Button.tsx";
import stylesButton from "./button/Button.module.css";
import stylesButtonDelete from "./button/ButtonDelete.module.css";
import useModal from "../hooks/useModal.tsx";
import CreateModal from "./modal/CreateModal.tsx";

const Detail = () => {
  const { data, onBack, onDelete } = useDetail();
  const { isUpdateModal, onOpenUpdateModal, onCloseUpdateModal } = useModal();

  return (
    <>
      {data && (
        <main>
          <p>{data.id}</p>
          <p>{data.title}</p>
          <p>{data.createdAt}</p>
          <p>{data.boardCategory}</p>
          {data.imageUrl && <img src={`/api${data.imageUrl}`} alt={"이미지"} />}
          <p>{data.content}</p>
          <Button onClick={onBack} styles={stylesButton} text={"목록"} />
          <Button
            onClick={onDelete}
            styles={stylesButtonDelete}
            text={"삭제"}
          />
          <Button
            onClick={onOpenUpdateModal}
            styles={stylesButton}
            text={"수정"}
          />
          {isUpdateModal && (
            <CreateModal
              prevData={{
                title: data.title,
                content: data.content,
                category: data.boardCategory,
              }}
              onClose={onCloseUpdateModal}
            />
          )}
        </main>
      )}
    </>
  );
};

export default Detail;
