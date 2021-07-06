import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityeffecttextMinFieldsModelBase } from "./PokemonV2AbilityeffecttextMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityeffecttextMinFieldsModel */
export interface PokemonV2AbilityeffecttextMinFieldsModelType extends Instance<typeof PokemonV2AbilityeffecttextMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityeffecttextMinFieldsModel */
export { selectFromPokemonV2AbilityeffecttextMinFields, pokemonV2AbilityeffecttextMinFieldsModelPrimitives, PokemonV2AbilityeffecttextMinFieldsModelSelector } from "./PokemonV2AbilityeffecttextMinFieldsModel.base"

/**
 * PokemonV2AbilityeffecttextMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2AbilityeffecttextMinFieldsModel = PokemonV2AbilityeffecttextMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
