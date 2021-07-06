import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluenameModelBase } from "./PokemonV2EncounterconditionvaluenameModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluenameModel */
export interface PokemonV2EncounterconditionvaluenameModelType extends Instance<typeof PokemonV2EncounterconditionvaluenameModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluenameModel */
export { selectFromPokemonV2Encounterconditionvaluename, pokemonV2EncounterconditionvaluenameModelPrimitives, PokemonV2EncounterconditionvaluenameModelSelector } from "./PokemonV2EncounterconditionvaluenameModel.base"

/**
 * PokemonV2EncounterconditionvaluenameModel
 *
 * columns and relationships of "pokemon_v2_encounterconditionvaluename"
 */
export const PokemonV2EncounterconditionvaluenameModel = PokemonV2EncounterconditionvaluenameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
