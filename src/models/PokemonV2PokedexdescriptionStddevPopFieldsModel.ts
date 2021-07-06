import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexdescriptionStddevPopFieldsModelBase } from "./PokemonV2PokedexdescriptionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexdescriptionStddevPopFieldsModel */
export interface PokemonV2PokedexdescriptionStddevPopFieldsModelType extends Instance<typeof PokemonV2PokedexdescriptionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexdescriptionStddevPopFieldsModel */
export { selectFromPokemonV2PokedexdescriptionStddevPopFields, pokemonV2PokedexdescriptionStddevPopFieldsModelPrimitives, PokemonV2PokedexdescriptionStddevPopFieldsModelSelector } from "./PokemonV2PokedexdescriptionStddevPopFieldsModel.base"

/**
 * PokemonV2PokedexdescriptionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokedexdescriptionStddevPopFieldsModel = PokemonV2PokedexdescriptionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
