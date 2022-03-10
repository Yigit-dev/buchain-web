import { Button, Modal, Text, useModal } from '@nextui-org/react'
import React from 'react'
import WordText from '/src/components/base/Text.js'

const FormationModul = ({ title, description }) => {
  const { setVisible, bindings } = useModal()

  return (
    <div>
      <Button auto shadow onClick={() => setVisible(true)}>
        Detaylar
      </Button>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text.Title id="modal-title" size={18}>
            {title}
          </Text.Title>
        </Modal.Header>
        <Modal.Body>
          <Text.InfoLight id="modal-description">{description}</Text.InfoLight>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default FormationModul
