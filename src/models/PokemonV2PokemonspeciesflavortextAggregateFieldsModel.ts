import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesflavortextAggregateFieldsModelBase } from "./PokemonV2PokemonspeciesflavortextAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesflavortextAggregateFieldsModel */
export interface PokemonV2PokemonspeciesflavortextAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesflavortextAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesflavortextAggregateFieldsModel */
export { selectFromPokemonV2PokemonspeciesflavortextAggregateFields, pokemonV2PokemonspeciesflavortextAggregateFieldsModelPrimitives, PokemonV2PokemonspeciesflavortextAggregateFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextAggregateFieldsModel.base"

/**
 * PokemonV2PokemonspeciesflavortextAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonspeciesflavortext"
 */
export const PokemonV2PokemonspeciesflavortextAggregateFieldsModel = PokemonV2PokemonspeciesflavortextAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
