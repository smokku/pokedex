import { Instance } from "mobx-state-tree"
import { PokemonV2LocationnameMinFieldsModelBase } from "./PokemonV2LocationnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationnameMinFieldsModel */
export interface PokemonV2LocationnameMinFieldsModelType extends Instance<typeof PokemonV2LocationnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationnameMinFieldsModel */
export { selectFromPokemonV2LocationnameMinFields, pokemonV2LocationnameMinFieldsModelPrimitives, PokemonV2LocationnameMinFieldsModelSelector } from "./PokemonV2LocationnameMinFieldsModel.base"

/**
 * PokemonV2LocationnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2LocationnameMinFieldsModel = PokemonV2LocationnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
