import { useForm } from "react-hook-form";
import { GiCrossMark } from "react-icons/gi";
import styled from "styled-components";

const AddEdit = ({
  onToggle,
  toggleform,
  edit,
  editId,
  add,
  showOnlyAdd,
  showOnlyEdit,
  users,
}) => {
  const { register, handleSubmit } = useForm();

  const onSubmitEdit = (user) => {
    edit(editId, user);
    toggleform(false);
  };

  const onSubmitAdd = (user) => {
    add(user);
    toggleform(false);
  };

  return (
    <FormDiv>
      <GiCrossMark
        style={{ color: "#800000", fontSize: "25px", cursor: "pointer" }}
        toggleform={toggleform}
        onClick={onToggle}
      />
      <span style={{ color: "grey", fontSize: "10px" }}>Close</span>
      <InnerFormDiv>
        <div>
          <label>Name</label>
          {showOnlyAdd &&
            !showOnlyEdit &&
            users
              .filter((user) => user.id == editId)
              .map((take) => (
                <TypeInput
                  type="text"
                  name="name"
                  ref={register({ required: true })}
                  defaultValue={take.name}
                />
              ))}
          {showOnlyEdit && !showOnlyAdd && (
            <TypeInput
              type="text"
              name="name"
              placeholder="Set Name"
              ref={register({ required: true })}
            />
          )}
        </div>
        <div>
          <label>Job</label>
          {showOnlyAdd &&
            !showOnlyEdit &&
            users
              .filter((user) => user.id == editId)
              .map((take) => (
                <TypeInput
                  type="text"
                  name="job"
                  ref={register}
                  defaultValue={take.job}
                />
              ))}
          {showOnlyEdit && !showOnlyAdd && (
            <TypeInput
              type="text"
              name="job"
              placeholder="Set Job"
              ref={register({ required: true })}
            />
          )}
        </div>
        <BtnDiv>
          {showOnlyEdit && (
            <BtnInput type="button" onClick={handleSubmit(onSubmitAdd)}>
              Crea
            </BtnInput>
          )}
          {showOnlyAdd && (
            <BtnInput type="button" onClick={handleSubmit(onSubmitEdit)}>
              Modifica
            </BtnInput>
          )}
        </BtnDiv>
      </InnerFormDiv>
    </FormDiv>
  );
};

export default AddEdit;

const BtnDiv = styled.div`
  display: flex;
  margin-top: 1%;
  margin-bottom: 1%;
`;

const TypeInput = styled.input`
  margin-left: 1%;
  margin-bottom: 2%;
  border-bottom: 2px dashed rgb(27, 27, 27);
  border-top-style: hidden;
  border-left-style: hidden;
  border-right-style: hidden;
  background-color: transparent;
  outline: none;
  font-family: inherit;
`;

const BtnInput = styled.button`
  margin-top: 2%;
  margin-bottom: 2%;
  font-family: inherit;
  border-radius: 25px 25px 25px 25px;
  outline: none;
  border-color: black;
  background-color: ivory;
`;

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
`;
const InnerFormDiv = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border-radius: 50px 50px 50px 50px;
  background-color: #660033;
  opacity: 0.8;
  border: 2px solid #1a000d;
  box-shadow: 3px 3px 5px 6px rgb(27, 27, 27), inset 0 0 10px rgb(27, 27, 27);
`;
