import { Instance } from "mobx-state-tree"
import { PokemonV2NatureMinFieldsModelBase } from "./PokemonV2NatureMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NatureMinFieldsModel */
export interface PokemonV2NatureMinFieldsModelType extends Instance<typeof PokemonV2NatureMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NatureMinFieldsModel */
export { selectFromPokemonV2NatureMinFields, pokemonV2NatureMinFieldsModelPrimitives, PokemonV2NatureMinFieldsModelSelector } from "./PokemonV2NatureMinFieldsModel.base"

/**
 * PokemonV2NatureMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2NatureMinFieldsModel = PokemonV2NatureMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
