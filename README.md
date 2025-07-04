# elements
A mapping **element** describes a kind of data that is used as a source type and/or a target type in one or more mappings.  
An element definition captures information that is used by the Mapping Hub software to
categorize and interrelate mappings, and it is displayed to human users to enable them to find the mappings they want.
All source and target types used by a mapping should be defined as elements before defining that mapping.  

To define a new element, create a JSON-LD file containing the metadata that describes your data type, and place that file into the appropriate subdirectory below the [elements](https://github.com/mappinghub/elements/tree/master/elements) directory of this repo.  The github actions associated with the [views repo](https://github.com/mappinghub/views) will do the rest, to enable that element to appear on [MappingHub.org](https://mappinghub.org/) .  To see examples of existing element definitions, browse the [elements](https://github.com/mappinghub/elements/tree/master/elements) directory of this repo.

Elements are organized into a hierarchy, using subdirectories.  If you need to add a new subdirectory, please follow the existing organizational pattern.

