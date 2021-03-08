import styles from './Accordion.module.css'

export default function Accordion() {

  return (
    
    <div>
      {/* Accordion Configuration Options
        
        data-allow-toggle
          Allow for each toggle to both open and close its section. Makes it possible for all sections to be closed.
          Assumes only one section may be open.
        
        data-allow-multiple
          Allow for multiple accordion sections to be expanded at the same time.
          Assumes data-allow-toggle otherwise the toggle on open sections would be disabled.
        __________
        
        Ex:
          <div id="accordionGroup" class="Accordion" data-allow-multiple>
          <div id="accordionGroup" class="Accordion" data-allow-toggle> */}

      <div id="accordionGroup" class={styles.Accordion}>
        
        <button type="button"
                aria-expanded="true"
                class={styles.Accordion_trigger}
                aria-controls="sect1"
                id="accordion1id">
          
          <span class={Accordion_title}>
            Personal Information
            <span class="Accordion-icon"></span>
          </span>

        </button>
      <div id="sect1"
          role="region"
          aria-labelledby="accordion1id"
          class="Accordion-panel">
        
      </div>
    
  </div>
</div>

  )
}
