import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexdescriptionStddevFieldsModelBase } from "./PokemonV2PokedexdescriptionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexdescriptionStddevFieldsModel */
export interface PokemonV2PokedexdescriptionStddevFieldsModelType extends Instance<typeof PokemonV2PokedexdescriptionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexdescriptionStddevFieldsModel */
export { selectFromPokemonV2PokedexdescriptionStddevFields, pokemonV2PokedexdescriptionStddevFieldsModelPrimitives, PokemonV2PokedexdescriptionStddevFieldsModelSelector } from "./PokemonV2PokedexdescriptionStddevFieldsModel.base"

/**
 * PokemonV2PokedexdescriptionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokedexdescriptionStddevFieldsModel = PokemonV2PokedexdescriptionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
