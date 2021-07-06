import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityeffecttextStddevPopFieldsModelBase } from "./PokemonV2AbilityeffecttextStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityeffecttextStddevPopFieldsModel */
export interface PokemonV2AbilityeffecttextStddevPopFieldsModelType extends Instance<typeof PokemonV2AbilityeffecttextStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityeffecttextStddevPopFieldsModel */
export { selectFromPokemonV2AbilityeffecttextStddevPopFields, pokemonV2AbilityeffecttextStddevPopFieldsModelPrimitives, PokemonV2AbilityeffecttextStddevPopFieldsModelSelector } from "./PokemonV2AbilityeffecttextStddevPopFieldsModel.base"

/**
 * PokemonV2AbilityeffecttextStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2AbilityeffecttextStddevPopFieldsModel = PokemonV2AbilityeffecttextStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
