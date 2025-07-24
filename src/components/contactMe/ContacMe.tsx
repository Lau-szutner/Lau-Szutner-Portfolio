import FormPanel from './FormPanel';
import InfoPanel from './InfoPanel';
const ContacMe = () => {
  return (
    <section className="py-20 w-full grid place-items-center" id="Contact">
      <div className="w-9/12 grid place-items-cente gap-5 xl:grid-cols-2">
        <FormPanel />
        <InfoPanel />
      </div>
    </section>
  );
};

export default ContacMe;
