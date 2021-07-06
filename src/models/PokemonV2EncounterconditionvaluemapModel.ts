import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluemapModelBase } from "./PokemonV2EncounterconditionvaluemapModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluemapModel */
export interface PokemonV2EncounterconditionvaluemapModelType extends Instance<typeof PokemonV2EncounterconditionvaluemapModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluemapModel */
export { selectFromPokemonV2Encounterconditionvaluemap, pokemonV2EncounterconditionvaluemapModelPrimitives, PokemonV2EncounterconditionvaluemapModelSelector } from "./PokemonV2EncounterconditionvaluemapModel.base"

/**
 * PokemonV2EncounterconditionvaluemapModel
 *
 * columns and relationships of "pokemon_v2_encounterconditionvaluemap"
 */
export const PokemonV2EncounterconditionvaluemapModel = PokemonV2EncounterconditionvaluemapModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
