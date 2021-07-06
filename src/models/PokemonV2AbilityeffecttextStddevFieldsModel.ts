import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityeffecttextStddevFieldsModelBase } from "./PokemonV2AbilityeffecttextStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityeffecttextStddevFieldsModel */
export interface PokemonV2AbilityeffecttextStddevFieldsModelType extends Instance<typeof PokemonV2AbilityeffecttextStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityeffecttextStddevFieldsModel */
export { selectFromPokemonV2AbilityeffecttextStddevFields, pokemonV2AbilityeffecttextStddevFieldsModelPrimitives, PokemonV2AbilityeffecttextStddevFieldsModelSelector } from "./PokemonV2AbilityeffecttextStddevFieldsModel.base"

/**
 * PokemonV2AbilityeffecttextStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2AbilityeffecttextStddevFieldsModel = PokemonV2AbilityeffecttextStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
