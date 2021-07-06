import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareanameSumFieldsModelBase } from "./PokemonV2LocationareanameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareanameSumFieldsModel */
export interface PokemonV2LocationareanameSumFieldsModelType extends Instance<typeof PokemonV2LocationareanameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareanameSumFieldsModel */
export { selectFromPokemonV2LocationareanameSumFields, pokemonV2LocationareanameSumFieldsModelPrimitives, PokemonV2LocationareanameSumFieldsModelSelector } from "./PokemonV2LocationareanameSumFieldsModel.base"

/**
 * PokemonV2LocationareanameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2LocationareanameSumFieldsModel = PokemonV2LocationareanameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
