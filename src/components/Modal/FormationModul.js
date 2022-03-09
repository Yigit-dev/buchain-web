import { Button, Modal, Text, useModal } from '@nextui-org/react'
import React from 'react'

const FormationModul = ({ title, description }) => {
  const { setVisible, bindings } = useModal()

  return (
    <div>
      <Button auto shadow color="secondary" onClick={() => setVisible(true)}>
        Open modal
      </Button>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {title}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">{description}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button auto onClick={() => setVisible(false)}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default FormationModul
