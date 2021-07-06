import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicAvgFieldsModelBase } from "./PokemonV2CharacteristicAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicAvgFieldsModel */
export interface PokemonV2CharacteristicAvgFieldsModelType extends Instance<typeof PokemonV2CharacteristicAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicAvgFieldsModel */
export { selectFromPokemonV2CharacteristicAvgFields, pokemonV2CharacteristicAvgFieldsModelPrimitives, PokemonV2CharacteristicAvgFieldsModelSelector } from "./PokemonV2CharacteristicAvgFieldsModel.base"

/**
 * PokemonV2CharacteristicAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2CharacteristicAvgFieldsModel = PokemonV2CharacteristicAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
