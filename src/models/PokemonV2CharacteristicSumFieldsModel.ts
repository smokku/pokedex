import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicSumFieldsModelBase } from "./PokemonV2CharacteristicSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicSumFieldsModel */
export interface PokemonV2CharacteristicSumFieldsModelType extends Instance<typeof PokemonV2CharacteristicSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicSumFieldsModel */
export { selectFromPokemonV2CharacteristicSumFields, pokemonV2CharacteristicSumFieldsModelPrimitives, PokemonV2CharacteristicSumFieldsModelSelector } from "./PokemonV2CharacteristicSumFieldsModel.base"

/**
 * PokemonV2CharacteristicSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2CharacteristicSumFieldsModel = PokemonV2CharacteristicSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
