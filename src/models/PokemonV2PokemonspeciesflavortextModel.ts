import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesflavortextModelBase } from "./PokemonV2PokemonspeciesflavortextModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesflavortextModel */
export interface PokemonV2PokemonspeciesflavortextModelType extends Instance<typeof PokemonV2PokemonspeciesflavortextModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesflavortextModel */
export { selectFromPokemonV2Pokemonspeciesflavortext, pokemonV2PokemonspeciesflavortextModelPrimitives, PokemonV2PokemonspeciesflavortextModelSelector } from "./PokemonV2PokemonspeciesflavortextModel.base"

/**
 * PokemonV2PokemonspeciesflavortextModel
 *
 * columns and relationships of "pokemon_v2_pokemonspeciesflavortext"
 */
export const PokemonV2PokemonspeciesflavortextModel = PokemonV2PokemonspeciesflavortextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
