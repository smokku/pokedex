import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaencounterrateSumFieldsModelBase } from "./PokemonV2LocationareaencounterrateSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaencounterrateSumFieldsModel */
export interface PokemonV2LocationareaencounterrateSumFieldsModelType extends Instance<typeof PokemonV2LocationareaencounterrateSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaencounterrateSumFieldsModel */
export { selectFromPokemonV2LocationareaencounterrateSumFields, pokemonV2LocationareaencounterrateSumFieldsModelPrimitives, PokemonV2LocationareaencounterrateSumFieldsModelSelector } from "./PokemonV2LocationareaencounterrateSumFieldsModel.base"

/**
 * PokemonV2LocationareaencounterrateSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2LocationareaencounterrateSumFieldsModel = PokemonV2LocationareaencounterrateSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
