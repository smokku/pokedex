import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffecteffecttextStddevPopFieldsModelBase } from "./PokemonV2MoveeffecteffecttextStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffecteffecttextStddevPopFieldsModel */
export interface PokemonV2MoveeffecteffecttextStddevPopFieldsModelType extends Instance<typeof PokemonV2MoveeffecteffecttextStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffecteffecttextStddevPopFieldsModel */
export { selectFromPokemonV2MoveeffecteffecttextStddevPopFields, pokemonV2MoveeffecteffecttextStddevPopFieldsModelPrimitives, PokemonV2MoveeffecteffecttextStddevPopFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextStddevPopFieldsModel.base"

/**
 * PokemonV2MoveeffecteffecttextStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveeffecteffecttextStddevPopFieldsModel = PokemonV2MoveeffecteffecttextStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
