import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicdescriptionModelBase } from "./PokemonV2CharacteristicdescriptionModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicdescriptionModel */
export interface PokemonV2CharacteristicdescriptionModelType extends Instance<typeof PokemonV2CharacteristicdescriptionModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicdescriptionModel */
export { selectFromPokemonV2Characteristicdescription, pokemonV2CharacteristicdescriptionModelPrimitives, PokemonV2CharacteristicdescriptionModelSelector } from "./PokemonV2CharacteristicdescriptionModel.base"

/**
 * PokemonV2CharacteristicdescriptionModel
 *
 * columns and relationships of "pokemon_v2_characteristicdescription"
 */
export const PokemonV2CharacteristicdescriptionModel = PokemonV2CharacteristicdescriptionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
