import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicStddevFieldsModelBase } from "./PokemonV2CharacteristicStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicStddevFieldsModel */
export interface PokemonV2CharacteristicStddevFieldsModelType extends Instance<typeof PokemonV2CharacteristicStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicStddevFieldsModel */
export { selectFromPokemonV2CharacteristicStddevFields, pokemonV2CharacteristicStddevFieldsModelPrimitives, PokemonV2CharacteristicStddevFieldsModelSelector } from "./PokemonV2CharacteristicStddevFieldsModel.base"

/**
 * PokemonV2CharacteristicStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2CharacteristicStddevFieldsModel = PokemonV2CharacteristicStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
