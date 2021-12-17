import ServiceBookForm from "./ServiceBookForm";
import TimedateBookForm from "./TimedateBookFrom";
import UserDataBookForm from "./UserDataBookForm";

const BookForm = (props) => {
  return (
    <>
      <div className="m-4">
        <UserDataBookForm userProps={props.userProps} />
        <TimedateBookForm timedateProps={props.timedateProps}/>
        <ServiceBookForm serviceProps={props.serviceProps}/>
      </div>
    </>
  );
};

export default BookForm;
