import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaMinFieldsModelBase } from "./PokemonV2LocationareaMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaMinFieldsModel */
export interface PokemonV2LocationareaMinFieldsModelType extends Instance<typeof PokemonV2LocationareaMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaMinFieldsModel */
export { selectFromPokemonV2LocationareaMinFields, pokemonV2LocationareaMinFieldsModelPrimitives, PokemonV2LocationareaMinFieldsModelSelector } from "./PokemonV2LocationareaMinFieldsModel.base"

/**
 * PokemonV2LocationareaMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2LocationareaMinFieldsModel = PokemonV2LocationareaMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
