import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicStddevPopFieldsModelBase } from "./PokemonV2CharacteristicStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicStddevPopFieldsModel */
export interface PokemonV2CharacteristicStddevPopFieldsModelType extends Instance<typeof PokemonV2CharacteristicStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicStddevPopFieldsModel */
export { selectFromPokemonV2CharacteristicStddevPopFields, pokemonV2CharacteristicStddevPopFieldsModelPrimitives, PokemonV2CharacteristicStddevPopFieldsModelSelector } from "./PokemonV2CharacteristicStddevPopFieldsModel.base"

/**
 * PokemonV2CharacteristicStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2CharacteristicStddevPopFieldsModel = PokemonV2CharacteristicStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
