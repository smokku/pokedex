import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassModelBase } from "./PokemonV2MovedamageclassModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassModel */
export interface PokemonV2MovedamageclassModelType extends Instance<typeof PokemonV2MovedamageclassModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassModel */
export { selectFromPokemonV2Movedamageclass, pokemonV2MovedamageclassModelPrimitives, PokemonV2MovedamageclassModelSelector } from "./PokemonV2MovedamageclassModel.base"

/**
 * PokemonV2MovedamageclassModel
 *
 * columns and relationships of "pokemon_v2_movedamageclass"
 */
export const PokemonV2MovedamageclassModel = PokemonV2MovedamageclassModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
