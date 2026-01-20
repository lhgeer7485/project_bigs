import useDetail from "../hooks/useDetail.tsx";
import Button from "./button/Button.tsx";
import stylesButton from "./button/Button.module.css";
import stylesButtonDelete from "./button/ButtonDelete.module.css";
import useModal from "../hooks/useModal.tsx";
import UpdateModal from "./modal/UpdateModal.tsx";
import styles from "./Detail.module.css";
import dateFilter from "../utils/date.ts";

const Detail = () => {
  const { data, onBack, onDelete } = useDetail();
  const { isUpdateModal, onOpenUpdateModal, onCloseUpdateModal } = useModal();

  return (
    <>
      {data && (
        <main className={styles.container}>
          <div className={styles.mainBox}>
            <div className={styles.titleBox}>
              <span className={styles.title}>{data.title}</span>
            </div>
            <div className={styles.between}>
              <div className={styles.ciBox}>
                <span className={styles.p}> {data.boardCategory}</span>
                <span>{data.id}</span>
              </div>
              <div className={styles.dateBox}>
                <span className={styles.p}>{dateFilter(data.createdAt)}</span>
              </div>
            </div>
            <div className={styles.imgBox}>
              {data.imageUrl && (
                <img
                  className={styles.img}
                  src={`/api${data.imageUrl}`}
                  alt={"이미지"}
                />
              )}
            </div>
            <div className={styles.contentBox}>
              <span className={styles.content}>{data.content}</span>
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.btnBox}>
              <Button onClick={onBack} styles={stylesButton} text={"목록"} />
            </div>
            <div className={styles.btnBox}>
              <Button
                onClick={onOpenUpdateModal}
                styles={stylesButton}
                text={"수정"}
              />
            </div>
            <div className={styles.btnBox}>
              <Button
                onClick={onDelete}
                styles={stylesButtonDelete}
                text={"삭제"}
              />
            </div>
          </footer>
          {isUpdateModal && (
            <UpdateModal
              id={data.id}
              onClose={onCloseUpdateModal}
              prevData={{
                title: data.title,
                content: data.content,
                category: data.boardCategory,
              }}
            />
          )}
        </main>
      )}
    </>
  );
};

export default Detail;
