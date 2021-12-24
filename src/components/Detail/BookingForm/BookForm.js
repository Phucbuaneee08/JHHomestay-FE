import ServiceBookForm from "./ServiceBookForm";
import UserDataBookForm from "./UserDataBookForm";

const BookForm = (props) => {
  return (
    <>
      <div className="m-4">
        <UserDataBookForm userProps={props.userProps} />
        <ServiceBookForm serviceProps={props.serviceProps}/>
      </div>
    </>
  );
};

export default BookForm;
