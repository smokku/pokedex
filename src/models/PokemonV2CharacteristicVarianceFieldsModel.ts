import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicVarianceFieldsModelBase } from "./PokemonV2CharacteristicVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicVarianceFieldsModel */
export interface PokemonV2CharacteristicVarianceFieldsModelType extends Instance<typeof PokemonV2CharacteristicVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicVarianceFieldsModel */
export { selectFromPokemonV2CharacteristicVarianceFields, pokemonV2CharacteristicVarianceFieldsModelPrimitives, PokemonV2CharacteristicVarianceFieldsModelSelector } from "./PokemonV2CharacteristicVarianceFieldsModel.base"

/**
 * PokemonV2CharacteristicVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2CharacteristicVarianceFieldsModel = PokemonV2CharacteristicVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
