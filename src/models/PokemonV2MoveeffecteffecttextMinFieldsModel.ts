import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffecteffecttextMinFieldsModelBase } from "./PokemonV2MoveeffecteffecttextMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffecteffecttextMinFieldsModel */
export interface PokemonV2MoveeffecteffecttextMinFieldsModelType extends Instance<typeof PokemonV2MoveeffecteffecttextMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffecteffecttextMinFieldsModel */
export { selectFromPokemonV2MoveeffecteffecttextMinFields, pokemonV2MoveeffecteffecttextMinFieldsModelPrimitives, PokemonV2MoveeffecteffecttextMinFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextMinFieldsModel.base"

/**
 * PokemonV2MoveeffecteffecttextMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MoveeffecteffecttextMinFieldsModel = PokemonV2MoveeffecteffecttextMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
