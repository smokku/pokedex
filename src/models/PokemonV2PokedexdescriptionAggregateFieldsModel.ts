import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexdescriptionAggregateFieldsModelBase } from "./PokemonV2PokedexdescriptionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexdescriptionAggregateFieldsModel */
export interface PokemonV2PokedexdescriptionAggregateFieldsModelType extends Instance<typeof PokemonV2PokedexdescriptionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexdescriptionAggregateFieldsModel */
export { selectFromPokemonV2PokedexdescriptionAggregateFields, pokemonV2PokedexdescriptionAggregateFieldsModelPrimitives, PokemonV2PokedexdescriptionAggregateFieldsModelSelector } from "./PokemonV2PokedexdescriptionAggregateFieldsModel.base"

/**
 * PokemonV2PokedexdescriptionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokedexdescription"
 */
export const PokemonV2PokedexdescriptionAggregateFieldsModel = PokemonV2PokedexdescriptionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
