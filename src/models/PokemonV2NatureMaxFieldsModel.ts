import { Instance } from "mobx-state-tree"
import { PokemonV2NatureMaxFieldsModelBase } from "./PokemonV2NatureMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NatureMaxFieldsModel */
export interface PokemonV2NatureMaxFieldsModelType extends Instance<typeof PokemonV2NatureMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NatureMaxFieldsModel */
export { selectFromPokemonV2NatureMaxFields, pokemonV2NatureMaxFieldsModelPrimitives, PokemonV2NatureMaxFieldsModelSelector } from "./PokemonV2NatureMaxFieldsModel.base"

/**
 * PokemonV2NatureMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2NatureMaxFieldsModel = PokemonV2NatureMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
