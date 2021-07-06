import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitynameModelBase } from "./PokemonV2AbilitynameModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitynameModel */
export interface PokemonV2AbilitynameModelType extends Instance<typeof PokemonV2AbilitynameModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitynameModel */
export { selectFromPokemonV2Abilityname, pokemonV2AbilitynameModelPrimitives, PokemonV2AbilitynameModelSelector } from "./PokemonV2AbilitynameModel.base"

/**
 * PokemonV2AbilitynameModel
 *
 * columns and relationships of "pokemon_v2_abilityname"
 */
export const PokemonV2AbilitynameModel = PokemonV2AbilitynameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
