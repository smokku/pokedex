import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitynameStddevFieldsModelBase } from "./PokemonV2AbilitynameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitynameStddevFieldsModel */
export interface PokemonV2AbilitynameStddevFieldsModelType extends Instance<typeof PokemonV2AbilitynameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitynameStddevFieldsModel */
export { selectFromPokemonV2AbilitynameStddevFields, pokemonV2AbilitynameStddevFieldsModelPrimitives, PokemonV2AbilitynameStddevFieldsModelSelector } from "./PokemonV2AbilitynameStddevFieldsModel.base"

/**
 * PokemonV2AbilitynameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2AbilitynameStddevFieldsModel = PokemonV2AbilitynameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
