import { Instance } from "mobx-state-tree"
import { PokemonV2GenderMinFieldsModelBase } from "./PokemonV2GenderMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenderMinFieldsModel */
export interface PokemonV2GenderMinFieldsModelType extends Instance<typeof PokemonV2GenderMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenderMinFieldsModel */
export { selectFromPokemonV2GenderMinFields, pokemonV2GenderMinFieldsModelPrimitives, PokemonV2GenderMinFieldsModelSelector } from "./PokemonV2GenderMinFieldsModel.base"

/**
 * PokemonV2GenderMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2GenderMinFieldsModel = PokemonV2GenderMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
