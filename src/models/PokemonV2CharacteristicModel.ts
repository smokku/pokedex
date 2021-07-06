import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicModelBase } from "./PokemonV2CharacteristicModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicModel */
export interface PokemonV2CharacteristicModelType extends Instance<typeof PokemonV2CharacteristicModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicModel */
export { selectFromPokemonV2Characteristic, pokemonV2CharacteristicModelPrimitives, PokemonV2CharacteristicModelSelector } from "./PokemonV2CharacteristicModel.base"

/**
 * PokemonV2CharacteristicModel
 *
 * columns and relationships of "pokemon_v2_characteristic"
 */
export const PokemonV2CharacteristicModel = PokemonV2CharacteristicModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
