import { useState } from 'react';

type DropdownProps = {
  options: string[],
}

function Dropdown({options}: DropdownProps) {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleIsOpen() {
    setIsOpen((prevState) => !prevState);
  }

  function setNewItem(option: string) {
    setIsOpen(false);
    setSelectedElement(option)
  }

  return (
    <div>
      <span role="figure">{selectedElement}</span>
      <button onClick={toggleIsOpen}>{isOpen ? 'Close' : 'Open'} Select</button>
      {
        isOpen && (
          <ul>
            {
              options.map((option) => (
                <li onClick={() => setNewItem(option)} key={Math.random()}>{option}</li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}

export default Dropdown;