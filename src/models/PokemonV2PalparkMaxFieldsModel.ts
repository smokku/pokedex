import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkMaxFieldsModelBase } from "./PokemonV2PalparkMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkMaxFieldsModel */
export interface PokemonV2PalparkMaxFieldsModelType extends Instance<typeof PokemonV2PalparkMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkMaxFieldsModel */
export { selectFromPokemonV2PalparkMaxFields, pokemonV2PalparkMaxFieldsModelPrimitives, PokemonV2PalparkMaxFieldsModelSelector } from "./PokemonV2PalparkMaxFieldsModel.base"

/**
 * PokemonV2PalparkMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PalparkMaxFieldsModel = PokemonV2PalparkMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
