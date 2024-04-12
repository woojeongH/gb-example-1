
export interface ExFieldsetProps {
  children: React.ReactNode
}

const ExFieldset = ({children}: ExFieldsetProps) => {
  return <fieldset>{children}</fieldset>
};


export default ExFieldset;