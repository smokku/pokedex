import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupnameModelBase } from "./PokemonV2EgggroupnameModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupnameModel */
export interface PokemonV2EgggroupnameModelType extends Instance<typeof PokemonV2EgggroupnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupnameModel */
export { selectFromPokemonV2Egggroupname, pokemonV2EgggroupnameModelPrimitives, PokemonV2EgggroupnameModelSelector } from "./PokemonV2EgggroupnameModel.base"

/**
 * PokemonV2EgggroupnameModel
 *
 * columns and relationships of "pokemon_v2_egggroupname"
 */
export const PokemonV2EgggroupnameModel = PokemonV2EgggroupnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
