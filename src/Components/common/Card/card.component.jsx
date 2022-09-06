export const Card = ({
  classCard,
  imageUrl,
  cardBody,
  classImage,
  classTitle,
  classRole,
  title,
  description,
  role,
  showStruc,
  showImage,
  children,
  classMainImg,
  classDescription,
}) => {
  return (
    <div className={classCard}>
      {showImage && (
        <div className={classMainImg}>
          <img src={imageUrl} className={classImage} alt="..." />
        </div>
      )}
      {showStruc && (
        <div className={cardBody}>
          <h2 className={classTitle}>{title}</h2>
          <h3 className={classRole}>{role}</h3>
          <p className={classDescription}>{description}</p>
        </div>
      )}
      {children}
    </div>
  );
};
