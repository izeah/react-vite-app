import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { LockIcon } from "./LockIcon";
import { MailIcon } from "./MailIcon";
import { useContext, useRef } from "react";
import showToast from "@/libs/alert/toast";
import { AuthContext } from "@/providers";
import PropTypes from "prop-types";
import { login } from "@/libs/reducers/auth/action";

export default function LoginModal({ isOpen, onOpenChange }) {
  const { dispatch } = useContext(AuthContext);
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = (onClose) => {
    return () => {
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;

      if (
        !username ||
        username.trim() === "" ||
        !password ||
        password.trim() === ""
      ) {
        showToast({
          type: "error",
          title: "Harap isi username/password",
          position: "bottom-right",
        });
        return;
      }

      dispatch(login(username, password));
      onClose();
    };
  };

  return (
    <Modal
      isOpen={isOpen}
      placement="auto"
      onOpenChange={onOpenChange}
      backdrop="blur"
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
            <ModalBody>
              <Input
                ref={usernameRef}
                autoFocus
                endContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Username"
                placeholder="Enter your username"
                variant="bordered"
              />
              <Input
                ref={passwordRef}
                endContent={
                  <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Password"
                type="password"
                placeholder="Enter your password"
                variant="bordered"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onClick={onClose}>
                Close
              </Button>
              <Button color="primary" onClick={handleSubmit(onClose)}>
                Log In
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

LoginModal.propTypes = {
  isOpen: PropTypes.bool,
  onOpenChange: PropTypes.func,
};
